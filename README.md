---
title: "Chrome-Code-Buddy"
---

Chrome Code Buddy is a chrome extension that can be used to follow along with programming tutorials on YouTube.
The extension allows one to take a screenshot of the video at any time, and scan an area of text using image recognition.
## How to Install  

Clone the repository  

    git clone https://github.com/oyavuzjr/Chrome-Code-Buddy
    cd Chrome-Code-Buddy
Run npm install

    npm install  
Since The extension is not available on the chrome store, we will have to build and add it.  

    npm run build
You should now see some files under a new directory called builds.  

    ls build 
We can now use this folder to add the extension to Chrome.

**Open up Google Chrome** 
1. Click on the 3 dots in the top right.
2. Go to **More Tools > Extensions**
3. Select "Load unpacked"
4. Select the newly created **build** folder

Now you can see the button on youtube to use the extension  

![YouTube Button](https://github.com/oyavuzjr/Chrome-Code-Buddy/blob/master/images/ytbutton.PNG?raw=true )  
Search for any programming tutorial, and pause the video when there is a clear view of the code. 
Now press the Code Buddy button and scan the area of the code.
After pressing submit, you will have the code as text.
![YouTube Button](https://github.com/oyavuzjr/Chrome-Code-Buddy/blob/master/images/example.PNG?raw=true )  
https://github.com/oyavuzjr/Chrome-Code-Buddy/blob/master/images/example.PNG?raw=true
