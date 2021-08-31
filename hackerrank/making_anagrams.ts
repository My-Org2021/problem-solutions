// https://www.hackerrank.com/challenges/making-anagrams/problem

function makingAnagrams(s1: string, s2: string): number {
    let s1Arr = s1.split(''), s2Arr = s2.split('');

    const conactArray = s1Arr.filter(el => {
        const index = s2Arr.indexOf(el);
        if (index == -1) return false;
        s2Arr.splice(index, 1);
        return true;
    });

    return (s1.length + s2.length) - (conactArray.length * 2)
}

const s1 = 'absdjkvuahdakejfnfauhdsaavasdlkj', s2 = 'djfladfhiawasdkjvalskufhafablsdkashlahdfa';
const res = makingAnagrams(s1, s2);
console.log(res);