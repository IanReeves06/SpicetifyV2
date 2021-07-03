package main

import (
	"fmt"
	"io/fs"
	"io/ioutil"
	"os"
	"os/exec"
	"strings"
)

func init() {
	current = "."
	homeDir, _ = os.UserHomeDir()
	archive = homeDir + "\\.spicetify"
	bin = homeDir + "\\Spicetify"
	binGallery = bin + "\\Gallery"
}

func main() {

	if !CheckInstalled() {
		InstallSpicetify()
		MoveThemes()
		CreateBinary()
	}

	// fmt.Println(getImages())
	// fmt.Println("LOL")
	// fmt.Println(getImageNames())
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

func getFiles(src string) []fs.FileInfo {

	fds, _ := ioutil.ReadDir(src)

	return fds
}

func getImages() []string {

	imageFiles := getFiles(binGallery)

	images := []string{}

	for _, v := range imageFiles {
		images = append(images, "\\"+v.Name())
	}
	return images
}

func getImageNames() []string {

	imageNames := []string{}

	for _, v := range getImages() {
		noPrefix := strings.ReplaceAll(v, "\\", "")
		noEnd := strings.Split(noPrefix, ".")[0]
		imageNames = append(imageNames, noEnd)
	}
	return imageNames
}

func ChangeTheme(i int) {

	name := getImageNames()[i]
	cmd := []string{}
	args := strings.Split(name, " - ")

	cmd = append(cmd, "spicetify restore")

	if args[0] == "Dribbblish" {
		cmd = append(cmd, "spicetify config extensions dribbblish.js")
	} else {
		cmd = append(cmd, "spicetify config extensions dribbblish.js-")
	}

	cmd = append(cmd, "spicetify config current_theme "+args[0])
	cmd = append(cmd, "spicetify config color_scheme "+args[1])
	cmd = append(cmd, "spicetify apply")

	// l1 := "spicetify config current_theme" + name
	// l2 := "spicetify config color_scheme" + name
	// l3 := "spicetify apply"

	// 	cmd := []string{l1, l2, l3}
	for _, v := range cmd {
		RunCommand(v)
	}
}
