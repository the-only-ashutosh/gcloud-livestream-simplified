# [**gcloud-livestream-simplified**](https://github.com/the-only-ashutosh/gcloud-livestream-simplified)
> ####Google Cloud Livestream Api usage simplified

### **While using gcloud Livestream Api it becomes cumbersome to add code for every particular event. This package is helpful in simplifying the process.**

## **Usage**

#### To create a new input signal 
  ##### const {createInput} = require('gcloud-livestream-simplified')
  ##### const inputResource = createInput({projectId:"some-project-37537725",location:"asia-south2",inputId:"some-input-signal"})
  ##### Here, createInput takes these parameters and returns an object that refers to the created input resource.

