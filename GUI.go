package main

import (
	"fyne.io/fyne"
	"fyne.io/fyne/app"
	"fyne.io/fyne/canvas"
	"fyne.io/fyne/container"
	"fyne.io/fyne/layout"
	"fyne.io/fyne/theme"
	"fyne.io/fyne/widget"
)

var w fyne.Window
var index int

func Start() {

	a := app.New()
	w = a.NewWindow("Theme Select")

	getFirst()

	a.Settings().SetTheme(theme.DarkTheme())
	w.Resize(fyne.NewSize(1200, 538))
	w.ShowAndRun()
}

func setContent(i int) {
	image := canvas.NewImageFromFile(gallery + getImages()[i])
	image.FillMode = canvas.ImageFillContain
	w.SetContent(loadUI(image, i))
	index = i
}

func getFirst() {
	setContent(0)
}

func getSecond() {
	setContent(10)
}

func confirmButton() {
	ChangeTheme(index)
}

func backButton() {
	if index >= 10 {
		getFirst()
	}
}

func forwardButton() {
	if index < 10 {
		getSecond()
	}
}

func loadBar() (*widget.Toolbar, *widget.Toolbar) {

	bar := widget.NewToolbar(
		widget.NewToolbarAction(theme.NavigateBackIcon(), func() { backButton() }),
		widget.NewToolbarSpacer(),
		widget.NewToolbarAction(theme.NavigateNextIcon(), func() { forwardButton() }),
	)

	confirm := widget.NewToolbar(
		widget.NewToolbarSpacer(),
		widget.NewToolbarAction(theme.ColorChromaticIcon(), func() { confirmButton() }),
		widget.NewToolbarSpacer(),
	)

	return bar, confirm
}

func loadUI(pic *canvas.Image, i int) fyne.CanvasObject {

	bar, confirm := loadBar()

	var entries *widget.Box

	if i < 10 {
		entries = loadPageOne()
	} else if i >= 10 {
		entries = loadPageTwo()
	}

	list := fyne.NewContainerWithLayout(layout.NewBorderLayout(bar, confirm, nil, nil),
		entries, bar, confirm)

	ui := container.NewHSplit(list, pic)
	ui.Offset = 0.19

	return ui
}

func loadPageOne() *widget.Box {

	b1 := widget.NewButton(getImageNames()[0], func() {
		counter := 0
		setContent(counter)
	})
	b2 := widget.NewButton(getImageNames()[1], func() {
		counter := 1
		setContent(counter)
	})
	b3 := widget.NewButton(getImageNames()[2], func() {
		counter := 2
		setContent(counter)
	})
	b4 := widget.NewButton(getImageNames()[3], func() {
		counter := 3
		setContent(counter)
	})
	b5 := widget.NewButton(getImageNames()[4], func() {
		counter := 4
		setContent(counter)
	})
	b6 := widget.NewButton(getImageNames()[5], func() {
		counter := 5
		setContent(counter)
	})
	b7 := widget.NewButton(getImageNames()[6], func() {
		counter := 6
		setContent(counter)
	})
	b8 := widget.NewButton(getImageNames()[7], func() {
		counter := 7
		setContent(counter)
	})
	b9 := widget.NewButton(getImageNames()[8], func() {
		counter := 8
		setContent(counter)
	})
	b10 := widget.NewButton(getImageNames()[9], func() {
		counter := 9
		setContent(counter)
	})

	buttons := widget.NewVBox(
		b1,
		b2,
		b3,
		b4,
		b5,
		b6,
		b7,
		b8,
		b9,
		b10,
	)
	return buttons
}

func loadPageTwo() *widget.Box {

	b1 := widget.NewButton(getImageNames()[10], func() {
		counter := 10
		setContent(counter)
	})
	b2 := widget.NewButton(getImageNames()[11], func() {
		counter := 11
		setContent(counter)
	})
	b3 := widget.NewButton(getImageNames()[12], func() {
		counter := 12
		setContent(counter)

	})
	b4 := widget.NewButton(getImageNames()[13], func() {
		counter := 13
		setContent(counter)
	})
	b5 := widget.NewButton(getImageNames()[14], func() {
		counter := 14
		setContent(counter)
	})
	b6 := widget.NewButton(getImageNames()[15], func() {
		counter := 15
		setContent(counter)
	})
	b7 := widget.NewButton(getImageNames()[16], func() {
		counter := 16
		setContent(counter)
	})
	b8 := widget.NewButton(getImageNames()[17], func() {
		counter := 17
		setContent(counter)
	})
	b9 := widget.NewButton(getImageNames()[18], func() {
		counter := 18
		setContent(counter)
	})

	buttons := widget.NewVBox(
		b1,
		b2,
		b3,
		b4,
		b5,
		b6,
		b7,
		b8,
		b9,
	)
	return buttons
}
