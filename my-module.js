var myModule = {
  name: 'kim',
  age: 24,
  aboutMe: () => {
    console.log('my name is ' + this.name + ' and i am ' + this.age + " year`s old.");
  }
};

module.exports = myModule;
