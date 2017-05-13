TARGET=ej

all: $(TARGET).tex
	bibtex $(TARGET)
	pdflatex $(TARGET).tex
	bibtex $(TARGET)
	pdflatex $(TARGET).tex
	pdflatex $(TARGET).tex
	evince $(TARGET).pdf </dev/null &>/dev/null &

edit:
	gedit Makefile *.bib *.tex &

clean:
	rm -f $(TARGET).pdf *.out *.aux *.log *.blg *.bbl *.dvi *.ps *.toc *.lot *.lof *.idx *~

