Multi-feature Forgery Detection Deep-Learning based Framework

1. Metadata Analysis (10/100 Weight):
Evaluating  ISO value, and comparing creation vs. modified date/time.
ISO value can indicate whether it is an original image or new/edited image. 
Similarly the creation date and modified date will also be changed if there is any edit made and will be reflected in the metadata details, indicating a warring. 
Scores: 8-10 (Green Flag - Accepted), 4-8 (Amber Flag - Suspicious), 0-4 (Red Flag - Rejected).
2. Error Level Analysis (ELA):
Customized CNN with SRM-initialized high-pass filters to detect tampering artifacts.
CNN is used as a patch descriptor for dense feature extraction from test images.
Feature fusion technique applied for final discriminative features.
The image with RGB values is given into the neural network. Output layer contain two neurons. One for fake image and one for real image. Depending upon the value of these neuron outputs we determine which class it is real or fake and how much confidence it is to be real or fake 
3. Pixel Manipulation Percentage Analyzer:
Assess pixel-level authenticity. Generating a probability heatmap that quantifies the extent of manipulation.
It uses two stream process RGB stream and DCT stream. The RGB stream takes RGB pixel values as input and follows it to neural network and DCT stream which is type of Fourier transform it capture Statistical Distribution through Y channel to detect double image compression then finally both the result pass into CNN model. 
And finally we get the heatmap of the output image explaining about the pixel manipulated in the image and the score that how much that image is matching and authenticate. 
4. Template Matching using SSIM (Structural Similarity Index Measure) : 
To identify any missing content in the user-submitted document when compared to our established ground truth. 
It will make a bounding box in places where there is any extra added items compared to the ground truth or if there is anything missing . This will clearly show us edit or tampering to our image. 


