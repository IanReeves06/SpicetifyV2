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

func Start() {

	a := app.New()
	w := a.NewWindow("Theme Select")

	getFirst(w)

	a.Settings().SetTheme(theme.DarkTheme())
	w.Resize(fyne.NewSize(1200, 538))
	w.ShowAndRun()
}

func setContent(w fyne.Window, i int) {
	image := canvas.NewImageFromFile(gallery + getImages()[i])
	image.FillMode = canvas.ImageFillContain
	w.SetContent(loadUI(w, image, i))
}

func getFirst(w fyne.Window) {
	setContent(w, 0)
}

func getSecond(w fyne.Window) {
	setContent(w, 10)
}

func confirmButton(i int) {
	ChangeTheme(i)
}

func backButton(w fyne.Window, i int) {
	if i >= 10 {
		getFirst(w)
	}
}

func forwardButton(w fyne.Window, i int) {
	if i < 10 {
		getSecond(w)
	}
}

func loadBar(w fyne.Window, i int) (*widget.Toolbar, *widget.Toolbar) {

	bar := widget.NewToolbar(
		widget.NewToolbarAction(theme.NavigateBackIcon(), func() { backButton(w, i) }),
		widget.NewToolbarSpacer(),
		widget.NewToolbarAction(theme.NavigateNextIcon(), func() { forwardButton(w, i) }),
	)

	confirm := widget.NewToolbar(
		widget.NewToolbarSpacer(),
		widget.NewToolbarAction(theme.ColorChromaticIcon(), func() { confirmButton(i) }),
		widget.NewToolbarSpacer(),
	)

	return bar, confirm
}

func loadUI(w fyne.Window, pic *canvas.Image, i int) fyne.CanvasObject {

	bar, confirm := loadBar(w, i)

	var entries *widget.Box

	if i < 10 {
		entries = loadPageOne(w)
	} else if i >= 10 {
		entries = loadPageTwo(w)
	}

	list := fyne.NewContainerWithLayout(layout.NewBorderLayout(bar, confirm, nil, nil),
		entries, bar, confirm)

	ui := container.NewHSplit(list, pic)
	ui.Offset = 0.19

	return ui
}

func loadPageOne(w fyne.Window) *widget.Box {

	b1 := widget.NewButton(getImageNames()[0], func() {
		setContent(w, 0)
	})
	b2 := widget.NewButton(getImageNames()[1], func() {
		setContent(w, 1)
	})
	b3 := widget.NewButton(getImageNames()[2], func() {
		setContent(w, 2)
	})
	b4 := widget.NewButton(getImageNames()[3], func() {
		setContent(w, 3)
	})
	b5 := widget.NewButton(getImageNames()[4], func() {
		setContent(w, 4)
	})
	b6 := widget.NewButton(getImageNames()[5], func() {
		setContent(w, 5)
	})
	b7 := widget.NewButton(getImageNames()[6], func() {
		setContent(w, 6)
	})
	b8 := widget.NewButton(getImageNames()[7], func() {
		setContent(w, 7)
	})
	b9 := widget.NewButton(getImageNames()[8], func() {
		setContent(w, 8)
	})
	b10 := widget.NewButton(getImageNames()[9], func() {
		setContent(w, 9)
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

func loadPageTwo(w fyne.Window) *widget.Box {

	b1 := widget.NewButton(getImageNames()[10], func() {
		setContent(w, 10)
	})
	b2 := widget.NewButton(getImageNames()[11], func() {
		setContent(w, 11)
	})
	b3 := widget.NewButton(getImageNames()[12], func() {
		setContent(w, 12)

	})
	b4 := widget.NewButton(getImageNames()[13], func() {
		setContent(w, 13)
	})
	b5 := widget.NewButton(getImageNames()[14], func() {
		setContent(w, 14)
	})
	b6 := widget.NewButton(getImageNames()[15], func() {
		setContent(w, 15)
	})
	b7 := widget.NewButton(getImageNames()[16], func() {
		setContent(w, 16)
	})
	b8 := widget.NewButton(getImageNames()[17], func() {
		setContent(w, 17)
	})
	b9 := widget.NewButton(getImageNames()[18], func() {
		setContent(w, 18)
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
