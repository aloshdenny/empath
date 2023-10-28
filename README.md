## Empath

Empath is a browser extension designed to help users track their moods over time. By simply writing about their day, the extension utilizes advanced natural language processing techniques to analyze the sentiment of their entries. The AI then provides insightful visual feedback, allowing users to observe their mood trends over days, weeks, or months.

## Features

Mood Analysis: The user could track their moods through journaling. Empath employs Natural Language Processing (NLP) techniques, leveraging the Hugging Face model Roberta, to analyze the sentiment of user entries.

Mood Visualization: Empath provides a dashboard for the users to gain a deeper understanding of their emotional well-being. It provides visual feedback to represent the user's mood trends over specific time periods. The graphs will show the top 3 behaviors of the user over specific time periods, from the input collected from the user's journals. And every time when the extension is accessed, the dashboard page will get refreshed, so the user will get a broader understanding of their behavior patterns.

## Tools Used

RoBERTa AI - RoBERTa is a robustly optimized BERT pretraining approach. It is a transformer-based natural language processing model that has been pretrained on a massive dataset of text and code. It is a large language model from Google AI, trained on a massive dataset of text and code. It can be used for a variety of natural language processing tasks, such as text classification, question answering, and sentiment analysis. RoBERTa has been shown to outperform other popular language models, such as BERT, on many benchmarks.
             
RoBERTa is primarily intended to be fine-tuned on downstream tasks such as: 

Natural language inference,
Question answering,
Sentiment analysis,
Text classification,
Named entity recognition,
Machine translation,
Summarization etc.


Chart.js - Chart.js is a free and open-source JavaScript library for creating HTML5-based charts. It is relatively simple to use and provides a wide range of customization options. It supports a variety of chart types, including bar charts, line charts, pie charts, doughnut charts, bubble charts, area charts, radar charts, and mixed charts. 
It also provides a number of plugins that can be used to add additional functionality to charts, such as annotations, zoom, and drag-and-drop. Chart.js is highly responsive and will automatically resize to fit its container. It is also compatible with all major browsers.
             
## Future Scope

We plan to integrate a fine-tuned version of the HuggingFace Audio2Vec speech model to transcribe speech to text. This is helpful at times when the user is unable/not in a situation to type out their journals. It's also a convenient option for commuters on the go; speech-to-text made much more easier
                
## Installation

Empath is a browser extension. So, to add this to your browser, follow these steps;

1. Clone the  repository.
2. First, go to the repository of "Empath"
3. Then, head on to the "Extensions Webstore" in your browser settings.
4. Switch the "Developer mode" option on and click on the option saying "Load Unpacked".
5. You will be directed to your file explorer. Select the 'exten' folder inside 'Empath'.
6. The extension will be successfully added to your browser.
7. Pin the extension to your browser toolbar.
8. Click on the pinned extension to view your mood.
7. Type in a few complete sentences (ending in '.' or '?') in any website of your choice and watch as the popup reflects your mood.    
