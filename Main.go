package main

import (
	"fmt"
	"os"
	"os/exec"
	"strings"
)

func init() {
	current = "."
	homeDir, _ = os.UserHomeDir()
	bin = homeDir + "\\Spicetify"
	archive = homeDir + "\\.spicetify"
}

func main() {

	if !CheckInstalled() {
		InstallSpicetify()
		MoveThemes()
		CreateBinary()
	}

	StartGUI()
}

func RunCommand(command string) {

	shell := "powershell "

	shell += command

	args := strings.Split(shell, " ")

	cmd := exec.Command(args[0], args[1:]...)

	err := cmd.Run()
	if err != nil {
		fmt.Println("Failed to run Command")
	}
}

func ChangeTheme(name string) {

	if strings.Contains(name, "Dribbblish") {
		// getDrib()
		fmt.Println("wäre cool")
	}

	if strings.Contains(name, " - ") {
		fmt.Println("yikes")
	} else {
		l1 := "spicetify config current_theme" + name
		l2 := "spicetify config color_scheme" + name
		l3 := "spicetify apply"

		cmd := []string{l1, l2, l3}
		for _, v := range cmd {
			RunCommand(v)
		}
	}
}
