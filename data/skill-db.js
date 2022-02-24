const skills = [
  {skill: 'Javascript', learned: true, _id: 125223},
  {skill: 'HTML', learned: true, _id: 127904},
  {skill: 'CSS', learned: true, _id: 139608},
  {skill: 'Python', learned: false, _id: 139655},
  {skill: 'Express', learned: false, _id: 132308},
  {skill: 'Node.js', learned: false, _id: 132358},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}