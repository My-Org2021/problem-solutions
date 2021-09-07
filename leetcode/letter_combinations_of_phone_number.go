package main

import (
	"fmt"
)

func main() {
	digits := "567"
	res := letterCombinations(digits)

	fmt.Println(res)
}

func letterCombinations(digits string) []string {
	res := []string{}

	if digits == "" {
		return res
	}

	buttons := map[byte]string{
		'2': "abc",
		'3': "def",
		'4': "ghi",
		'5': "jkl",
		'6': "mno",
		'7': "pqrs",
		'8': "tuv",
		'9': "wxyz",
	}

	res = []string{""}

	for i := range digits {
		button := buttons[digits[i]]

		var following []string
		for j := range button {
			b := button[j]

			for _, r := range res {
				following = append(following, r+string(b))
			}
		}

		res = following
	}

	return res
}
