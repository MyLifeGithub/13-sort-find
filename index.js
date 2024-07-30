let testArr = [1,2,3,4];
testArr.find((num) => num == 4) // returns first elem that corresponds condition
testArr.sort()
let arr = [
    {
        id : Math.random(),
        name : 'Timur',
        info : {
            school : '235',
            faculity : 'Frontend'
        }
    },
    {
        id : Math.random(),
        name : 'Alex',
        info : {
            school : '232',
            faculity : 'Backend'
        }
    },
    {
        id : Math.random(),
        name : 'Alex',
        info : {
            school : '232',
            faculity : 'Backend'
        }
    }
]
let categories = [
    {
        course :' FRONTEND',
        count : 0
    },
    {
        course :' BACKEND',
        count : 0
    }
]

arr.map((person) => {
    categories.map((item) => {
        if (item.course.replace(' ','').toLowerCase() == person.info.faculity.toLowerCase()) {
            ++item.count
        }
    })
})
console.log(categories);