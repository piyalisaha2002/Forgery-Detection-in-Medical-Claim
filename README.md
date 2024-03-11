# Insurance Claim Verification System (Forgery Detection and Template Matching for Medical Claim)

## Overview
This repository contains an innovative insurance claim verification system tailored for Bajaj Finserv, aiming to revolutionize conventional assessment methods using advanced technologies. The system leverages Template Matching algorithms, Forgery Detection mechanisms, and Detail Verification processes to enhance the accuracy and efficacy of insurance claims processing while fortifying defenses against potential fraudulent or tampered submissions.

## Features

### Template Matching
- **RESNET101 and QDRANT Vector Database**: Utilizes deep learning to create detailed feature maps capturing document features. QDRANT vector database ensures faster and efficient comparison of feature maps, enhancing the matching process.
- **SIFT-KNN Matcher**: Focuses on visual similarities in images using Scale-Invariant Feature Transform (SIFT) and K-Nearest Neighbors (KNN) algorithm to find the most similar templates based on visual characteristics.

### Forgery Detection
- **Logo Matching using NMSE and SIFT**: Compares logos in different images using Normalized Mean Square Error (NMSE) and Scale-Invariant Feature Transform (SIFT) methods to measure and find similarities between logos.
- **Text Size Alignment Analysis**: Examines the alignment and consistency of text sizes in documents or images to ensure uniformity and readability.
- **Pixel Manipulation Analysis**: Assesses document authenticity at a pixel level using RGB and DCT streams, generating a probability heatmap quantifying the extent of manipulation.
- **Error Level Analysis (ELA)**: Analyzes images for error levels by resizing them to 100px x 100px and passing them through a neural network to determine the likelihood of an image being real or fake.

## Utility
Integrating this advanced model into insurance companies' processes enhances claim assessment accuracy, automates processes, and fortifies fraud detection. Without it, insurance companies would face increased vulnerability to fraudulent and erroneous claims, leading to potential financial losses. Manual evaluations would be prone to human error and inconsistencies, resulting in delays and higher operational costs. Additionally, the absence of such a model would hinder the industry's ability to adapt to evolving fraud tactics, making it challenging to stay ahead of fraudulent activities.


## Contributors
- Yash Saha
- Shashank Pandey
- Atul Patel
- Sheffale TS
- Aditya
