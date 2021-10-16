package main

import (
	"fmt"
	"strings"
)

func main() {
	s := "   fly me   to   the moon  "

	res := lengthOfLastWord(s)
	fmt.Println(res)
}

func lengthOfLastWord(s string) int {
	// Split string, word by word.
	fields := strings.Fields(s)

	return len(fields[len(fields)-1])
}
