package main

import (
	"fmt"
	"io/fs"
	"io/ioutil"
	"os"
	"os/exec"
	"strings"

	"gopkg.in/ini.v1"
)

func init() {
	current = "."
	homeDir, _ = os.UserHomeDir()
	bin = homeDir + "\\.spicetify"
	gallery = bin + "\\Gallery"
}

func main() {

	if !CheckInstalled() {
		InstallSpicetify()
	}
	Start()
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

	imageFiles := getFiles(gallery)

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
	args := strings.Split(name, " - ")

	path := bin + "\\config-xpui.ini"
	cfg, _ := ini.Load(path)

	cfg.Section("Setting").Key("current_theme").SetValue(args[0])
	cfg.Section("Setting").Key("color_scheme").SetValue(args[1])

	if args[0] == "Dribbblish" {
		CopyFile(bin+"\\Themes\\Dribbblish\\dribbblish.js", bin+"\\Extensions\\dribbblish.js", bin+"\\Extensions")
		cfg.Section("AdditionalOptions").Key("extensions").SetValue("dribbblish.js")
	} else {
		os.Remove(bin + "\\Extensions\\dribbblish.js")
		cfg.Section("AdditionalOptions").Key("extensions").SetValue("")
	}
	cfg.SaveTo(path)

	cmd := "spicetify restore; spicetify apply"

	RunCommand(cmd)
}
