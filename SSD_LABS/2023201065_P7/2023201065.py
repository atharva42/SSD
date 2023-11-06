import pandas as pd

# Q1
datad = pd.read_csv('stock_data.csv')
df = pd.DataFrame(datad)
df.iloc[:, 0:-6].to_csv("Q1_1.txt", index=False)

# Q2 

data = pd.read_csv('Q1_1.txt')
if data['% Chng'].dtype != 'object':
    data['% Chng'] = data['% Chng'].astype(str)
data['% Chng'] = pd.to_numeric(data['% Chng'].str.rstrip('%'), errors='coerce')

filtered_data = filter(lambda row: row['% Chng'] < -3, df.to_dict(orient='records'))

resultant_data = pd.DataFrame(list(filtered_data))
resultant_data.to_csv('Q1_2.txt', index=False)

# Q3
df = pd.read_csv('Q1_2.txt')
average_open = round(df['Open'].str.replace(',', '').astype(float).mean(), 2)
average_high = round(df['High'].str.replace(',', '').astype(float).mean(), 2)
average_low = round(df['Low'].str.replace(',', '').astype(float).mean(),2)

with open('Q1_3.txt', 'w') as file:
    file.write('Average of Open is: {}\nAverage of high is: {}\nAverage of low is: {}\n'.format(average_open, average_high, average_low))

