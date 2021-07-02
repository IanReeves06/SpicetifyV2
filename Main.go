package main

import (
	"fmt"
	"os"
	"os/exec"
	"strings"

	"fyne.io/fyne"
	"fyne.io/fyne/app"
	"fyne.io/fyne/canvas"
	"fyne.io/fyne/layout"
	"fyne.io/fyne/theme"
	"fyne.io/fyne/widget"
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

	// app := app.New()

	// container := fyne.NewContainerWithLayout(
	// 	layout.NewBorderLayout(navBar, nil, fileList, nil),
	// 	navBar, fileList, image,
	// )

	// win.SetContent(container)

	// win := app.NewWindow("Hello World")
	// win.SetContent(widget.NewVBox(
	// 	widget.NewLabel("Hello World!"),
	// 	widget.NewButton("Quit", func() {
	// 		app.Quit()
	// 	}),
	// ))

	// win.ShowAndRun()

	imageApp := app.New()
	win := imageApp.NewWindow("Theme Select")

	button1 := widget.NewButton("", func() {
		fmt.Println("lol")
	})

	navBar := widget.NewToolbar(

		widget.NewToolbarAction(theme.NavigateBackIcon(), func() {}),
		widget.NewToolbarSpacer(),
		widget.NewToolbarAction(theme.NavigateNextIcon(), func() {}))
	fileList := widget.NewGroup("directory",
		widget.NewLabel("Image 1"),
		widget.NewLabel("Image 2"),
		widget.NewLabel("Image 3"))
	image := canvas.NewImageFromFile(bin + "\\Gallery" + "\\Adapta-Nokto.png")

	container := fyne.NewContainerWithLayout(
		layout.NewBorderLayout(navBar, nil, fileList, nil),
		navBar, fileList, image, button1,
	)

	win.SetContent(container)
	win.Resize(fyne.NewSize(640, 480))

	win.ShowAndRun()
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
