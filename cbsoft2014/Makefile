all: bib tex
	pdflatex mezuro.tex
	evince mezuro.pdf &

bib: mezuro.bib
	pdflatex mezuro.tex
	bibtex mezuro

tex: mezuro.tex
	pdflatex mezuro.tex

clean:
	rm *.bbl *.aux *.blg *.log *.pdf