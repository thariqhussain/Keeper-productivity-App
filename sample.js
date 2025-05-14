let longText = "Hi my name is Thariq Hussain i am a frontend developer and i am looking for a job";

let bioData = {
    name: 'Thariq',
    age: 33,
    description: 'Hi my name is Thariq Hussain i am a frontend developer and i am looking for a job'
}


function descTrimming (myObject) {
    let result;
    if(myObject.description.length > 50) {
        result = myObject.description.substring(0, 40);
    };
    console.log(result)
}

descTrimming(bioData)