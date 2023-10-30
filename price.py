import pickle
import numpy as np
from flask import Flask, request, render_template

app = Flask(__name__, template_folder='template', static_folder='static')

model = pickle.load(open('house_price.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('price.html', data = None)


house_types = [
    {"name": "Block of Flats", "value": 0},
    {"name": "Detached Bungalow", "value": 1},
    {"name": "Detached Duplex", "value": 2},
    {"name": "Semi Detached Bungalow", "value": 3},
    {"name": "Semi Detached Duplex", "value": 4},
    {"name": "Terraced Bungalow", "value": 5},
    {"name": "Terraced Duplexes", "value": 6}
]


states = [
        {'name':'Abia', 'value': 0}, 
        {'name':'Abuja', 'value': 1}, 
        {'name':'Akwa_Ibom', 'value': 2}, 
        {'name':'Anambra', 'value': 3}, 
        {'name':'Bayelsa', 'value': 4}, 
        {'name':'Borno', 'value': 5}, 
        {'name':'Cross_River', 'value': 6}, 
        {'name':'Delta', 'value': 7}, 
        {'name':'Edo', 'value': 8}, 
        {'name':'Ekiti', 'value': 9}, 
        {'name':'Enugu', 'value': 10}, 
        {'name':'Imo', 'value': 11}, 
        {'name':'Kaduna', 'value': 12}, 
        {'name':'Kano', 'value': 13}, 
        {'name':'Katsina', 'value': 14}, 
        {'name': 'Kogi', 'value': 15},
        {'name':'Kwara', 'value': 16}, 
        {'name':'Lagos', 'value': 17}, 
        {'name':'Nassarawa', 'value': 18}, 
        {'name':'Niger', 'value': 19}, 
        {'name':'Ogun', 'value': 20}, 
        {'name':'Osun', 'value': 21}, 
        {'name':'Oyo', 'value': 22}, 
        {'name':'Plateau', 'value': 23}, 
        {'name':'Rivers', 'value': 24} 
                
]







@app.route('/price', methods = ['GET','POST'])
def estimate_price():
    bed = 0
    bath = 0
    toilet = 0
    parking = 0
    house = 0
    state = 0
    city = 0
    if request.method == 'POST':
        house = request.form.get('house')
        state = request.form.get('state')
        city = request.form.get('city')

        print(f"house: {house}, state: {state}, city: {city}")
        
        bed = int(request.form['a'])
        bath = int(request.form['b'])
        toilet = int(request.form['c'])
        parking = int(request.form['d'])
        
            
        print(f"bed: {bed}, bath: {bath}, toilet: {toilet}, parking: {parking}")
        
        
        for house_type in house_types:
            if house == str(house_type['value']):  
                house = house_type['value']
                break  
                            
        for sta in states:
            if state == str(sta['value']):
                state = sta['value']
                break
        
 
    
        features = np.array([[bed,bath,toilet, parking,house, city,state]], dtype= int)        
        prediction = model.predict(features)
        
        print(f"Data to be sent: {prediction[0]}")
        return render_template('price.html', house_types = house_types, states = states, data = prediction[0])
    
    return render_template('price.html', house_types = house_types, states = states, data = None)




if __name__ == '__main__':
    app.run(debug = True)
    
    

