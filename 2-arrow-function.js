// const square = function(x){
//    return x * x
// }
// const square = (x) => {
//    return x * x
// }
// const square = (x) => x * x

//console.log(square(3))

const event = {
    name: 'birthday party',
    guestlist: ['him', 'jack', 'ray'],
    printguestlist () {
        console.log('This is ' + this.name)

        this.guestlist.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)


        })
    }
}
event.printguestlist()