const a = ['a', 'b', 'c', 'd'];
const filterValue = 'b';
const c = a.filter((item)=> {
    return item !== filterValue
})

const index = a.find((item) => item === filterValue)
const d = a.splice(index, 1)