import pandas as pd
import requests
import json
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.neural_network import MLPRegressor

###
# Compare decision tree, random forest, and neural network on predicting
# Canadian Disaster Database features (event category, event group, 
# event subgroup, event type, and comments) to number of fatalities.
# The neural network shows promising results, showing a mean squared error
# of 0.82.
###

data = pd.read_csv("canadian-disaster-database.csv")
print(len(data))

df = data.dropna(subset=["fatalities"])
sizeData = len(df)
print(sizeData)
numTrain = 500 # Set number of trainin data points to 500
# print(df.columns)

features1 = df[["event_category", "event_group", "event_subgroup", "event_type", "place", "comments", "fatalities"]]
features2 = df[["event_category", "event_group", "event_subgroup", "event_type", "fatalities", "comments"]]
features1 = features1.fillna("not available")
features2 = features2.fillna("not available")
print("Unique Events Subgroup:", features2["event_category"].unique() )

# When training, use the first numTrain data points for training and the rest for testing
tree = DecisionTreeRegressor()
X = pd.get_dummies(features2[["event_category", "event_group", "event_subgroup", "event_type", "comments"]], drop_first=True).head(numTrain)
y = features2["fatalities"].head(numTrain)
tree.fit(X,y)
# print(tree.predict(X.head(10)))
print("Decision Tree score:", tree.score(X.tail(sizeData-numTrain),y.tail(sizeData-numTrain)))

forest = DecisionTreeRegressor()
X_for = pd.get_dummies(features2[["event_category", "event_group", "event_subgroup", "event_type", "comments"]], drop_first=True).head(numTrain)
y_for = features2["fatalities"].head(numTrain)
forest.fit(X_for,y_for)
# print(forest.predict(X_for.head(10)))
print("Random Forest score:", forest.score(X_for.tail(sizeData-numTrain),y_for.tail(sizeData-numTrain)))

nn = MLPRegressor()
X_nn = pd.get_dummies(features2[["event_category", "event_group", "event_subgroup", "event_type", "comments"]], drop_first=True).head(numTrain)
y_nn = features2["fatalities"].head(numTrain)
nn.fit(X_nn,y_nn)
# print(nn.predict(X_nn.head(10)))
print("Neural Network score:", nn.score(X_nn.tail(sizeData-numTrain),y_nn.tail(sizeData-numTrain)))