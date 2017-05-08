LATEX = pdflatex
TARGET = poster-ej

all: $(TARGET).tex 
	$(LATEX) $<
	evince $(TARGET).pdf &

edit:
	gedit Makefile *.bib *.tex &

clean:
	rm -f *.pdf *.aux *.bbl *.blg *.brf *.idx *.ilg *.ind *.lof *.log *.lot *.nav *.out *.snm *.toc
