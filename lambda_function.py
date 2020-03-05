import pandas as pd
import json

df = pd.read_csv('gentry.csv')
csv_list = df.to_dict("records")
hoods = df.neighborhood.unique()

def calculateScore(year1, year2):
    result = []
    for zone in hoods:
        
        demographics = 0
        rent = 0
        income = 0
        pop_degree = 0
        gentry_score = 0
        
        percent_black = [obj for obj in csv_list if obj['neighborhood'] == zone and obj['metric'] == 'percent_black'][0]
        percent_hispanic = [obj for obj in csv_list if obj['neighborhood'] == zone and obj['metric'] == 'percent_hispanic'][0]
        percent_asian = [obj for obj in csv_list if obj['neighborhood'] == zone and obj['metric'] == 'percent_asian'][0]
        percent_white = [obj for obj in csv_list if obj['neighborhood'] == zone and obj['metric'] == 'percent_white'][0]
        median_rent = [obj for obj in csv_list if obj['neighborhood'] == zone and obj['metric'] == 'median_rent'][0]
        median_income = [obj for obj in csv_list if obj['neighborhood'] == zone and obj['metric'] == 'median_income'][0]
        degree_holders = [obj for obj in csv_list if obj['neighborhood'] == zone and obj['metric'] == 'pop_above_25_with_degree'][0]
        
        black_pop_growth = ((percent_black[year2] - percent_black[year1])*100)
        hispanic_pop_growth = ((percent_hispanic[year2] - percent_hispanic[year1])*100)
        asian_pop_growth = ((percent_asian[year2] - percent_asian[year1])*100)
        white_pop_growth_rate = ((percent_white[year2] - percent_white[year1])*100)
        minority_growth_rate = black_pop_growth + hispanic_pop_growth + asian_pop_growth
        rent_increase_rate = (((median_rent[year2] - median_rent[year1]))/median_rent[year1]) * 100
        income_increase_rate = (((median_income[year2] - median_income[year1]))/median_income[year1]) * 100
        degree_holders_rate = ((degree_holders[year2] - degree_holders[year1])) * 100
        
        if minority_growth_rate - white_pop_growth_rate < -7:
            demographics += 25
        if rent_increase_rate > 7:
            rent += 25
        if income_increase_rate > 7:
            income += 25
        if degree_holders_rate > 7:
            pop_degree += 25
            
        gentry_score = demographics + rent + income + pop_degree
        result.append({"id":zone, "weight": gentry_score/10})
        
    return result
        
def lambda_handler(event, context):
    years = json.loads(event['body'])
    obj = calculateScore(years["year1"], years["year2"])
    return {
        'statusCode': 200,
        'body': json.dumps(obj)
    }