import requests
import pandas as pd
from emojisan import * 

API_URL = "https://api-inference.huggingface.co/models/arpanghoshal/EmoRoBERTa"
headers = {"Authorization": f"Bearer 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"}

# Define a dictionary to map emotions to unique numbers
emotion_mapping = {
    'admiration': 0, 'amusement': 1, 'anger': 2, 'annoyance': 3, 'approval': 4,
    'caring': 5, 'confusion': 6, 'curiosity': 7, 'desire': 8, 'disappointment': 9,
    'disapproval': 10, 'disgust': 11, 'embarrassment': 12, 'excitement': 13, 'fear': 14,
    'gratitude': 15, 'grief': 16, 'joy': 17, 'love': 18, 'nervousness': 19,
    'optimism': 20, 'pride': 21, 'realization': 22, 'relief': 23, 'remorse': 24,
    'sadness': 25, 'surprise': 26, 'neutral': 27
}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

# Get the input from the user
input_prompt = input("Input prompt: ")

# Query the model
output = query({
    "inputs": input_prompt,
})

# Extract emotion labels and scores
emotions = output[0]
data = {"Prompt": input_prompt}

# Only take the top 5 emotions and store their labels, scores, and numbers
for i, emotion in enumerate(emotions[:5]):
    label = emotion["label"]
    score = emotion["score"]
    number = emotion_mapping.get(label, -1)
    data[f"Mood {i + 1}"] = label
    data[f"Score {i + 1}"] = score
    data[f"Emotion Number {i + 1}"] = number

# Create or append to a CSV file
try:
    df = pd.read_csv("roberta-sentiment/emotion_data.csv")
    df = df.append(data, ignore_index=True)
except FileNotFoundError:
    df = pd.DataFrame(data, index=[0])

df.to_csv("roberta-sentiment/emotion_data.csv", index=False)
# print(input_prompt, end="\n")
# print(label, end="\n")
# print(emoji_return(number))