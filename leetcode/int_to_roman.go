package main

import "fmt"

func main() {
	num := 1994
	res := intToRoman(num)
	fmt.Println(res)
}

func intToRoman(num int) string {
	var res string
	var i int

	for num > 0 {
		if num >= conversions[i].Integer {
			res += conversions[i].Roman
			num -= conversions[i].Integer
		} else {
			i++
		}
	}

	return res
}

type Conversion struct {
	Roman   string
	Integer int
}

var conversions = []Conversion{
	{
		Integer: 1000,
		Roman:   "M",
	},
	{
		Integer: 900,
		Roman:   "CM",
	},
	{
		Integer: 500,
		Roman:   "D",
	},
	{
		Integer: 400,
		Roman:   "CD",
	},
	{
		Integer: 100,
		Roman:   "C",
	},
	{
		Integer: 90,
		Roman:   "XC",
	},
	{
		Integer: 50,
		Roman:   "L",
	},
	{
		Integer: 40,
		Roman:   "XL",
	},
	{
		Integer: 10,
		Roman:   "X",
	},
	{
		Integer: 9,
		Roman:   "IX",
	},
	{
		Integer: 5,
		Roman:   "V",
	},
	{
		Integer: 4,
		Roman:   "IV",
	},
	{
		Integer: 1,
		Roman:   "I",
	},
}
