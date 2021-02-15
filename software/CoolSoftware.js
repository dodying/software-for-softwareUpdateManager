'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Batch WORD to PDF Converter': {
      commercial: 3,
      url: 'https://www.pdfzilla.com/download.html',
      version: '#colOne>p',
      download: 'https://www.pdfzilla.com/down/pdfzilla.exe',
      install: 'install_inno'
    },
    'Convertir PDF': {
      commercial: 3,
      url: 'https://www.convertirpdf.fr/telechargement.html',
      version: '#colOne>p',
      download: 'https://www.convertirpdf.fr/down/convertirpdf.exe',
      install: 'install_inno'
    },
    'Free Excel Viewer': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/free_excel_viewer,1.html'
      },
      install: 'install_inno'
    },
    'Free File Undelete': {
      url: 'https://www.pdfzilla.com/download.html',
      version: '#colOne',
      download: 'https://www.pdfzilla.com/down/FreeFileUndelete.exe',
      install: 'install_inno'
    },
    'Free PDF Reader': {
      url: 'https://www.pdfzilla.com/free-pdf-reader.html',
      version: ['#colOne', 'text', /Version: ([\d.]+)/],
      download: 'https://www.pdfzilla.com/down/freepdfreader.exe',
      install: 'install_inno'
    },
    'JPG To PDF Converter': {
      commercial: 3,
      url: 'https://www.jpgtopdfconverter.com/download.html',
      version: '.container h1~p',
      download: 'https://www.jpgtopdfconverter.com/down/jpg2pdf.exe',
      install: 'install_inno'
    },
    'JPG To PDF': {
      commercial: 3,
      url: 'https://www.jpgpdf.net/download.html',
      version: '#content>p',
      download: 'https://www.jpgpdf.net/down/jpgtopdf.exe',
      install: 'install_inno'
    },
    'PDF Anti-Copy': {
      commercial: 3,
      url: 'https://pdfanticopy.com/',
      version: 'div>[href="down/pdfanticopy.exe"]',
      download: 'https://pdfanticopy.com/down/pdfanticopy.zip',
      install: 'install'
    },
    'PDF OCR': {
      commercial: 3,
      url: 'https://www.pdfocr.net/download.html',
      version: '#cright>p',
      download: 'https://www.pdfocr.net/down/pdfocr.exe',
      install: 'install_inno'
    },
    'PDF Page Delete': {
      commercial: 3,
      url: 'https://www.pdfzilla.com/pdfpagedelete.html',
      version: '#colOne',
      download: 'https://www.pdfzilla.com/down/pdfpagedelete.exe',
      install: 'install_inno'
    },
    'PDF Page Lock': {
      commercial: 3,
      url: 'https://pdfpagelock.com/download.html',
      version: ['#about>p', 'text', /Version: ([\d.]+)/],
      download: 'https://pdfpagelock.com/down/pdf_page_lock.exe',
      install: 'install_inno_type'
    },
    'PDF To Excel Converter': {
      commercial: 3,
      url: 'https://www.pdfexcelconverter.com/download.html',
      version: '#colOne>p',
      download: 'https://www.pdfexcelconverter.com/down/pdf2excel.exe',
      install: 'install_inno'
    },
    'PDF To JPG Converter': {
      commercial: 3,
      url: 'https://www.pdftojpgconverter.com/download.html',
      version: '.pricing-intro>p',
      download: 'https://www.pdftojpgconverter.com/down/pdf2jpg.exe',
      install: 'install_inno'
    },
    'PDF to TXT Converter': {
      commercial: 3,
      url: 'https://www.pdfzilla.com/zilla_pdf_to_txt_converter.html',
      version: '#colOne',
      download: 'https://www.pdfzilla.com/down/pdf2txt.exe',
      install: 'install_inno'
    },
    PDFZilla: {
      commercial: 3,
      url: 'https://www.pdfzilla.com/download.html',
      version: '#colOne>p',
      download: 'https://www.pdfzilla.com/down/pdfzilla.exe',
      install: 'install_inno'
    },
    'Win PDF Editor': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/PDF/WinPDFEditor.shtml'
      },
      download: 'https://www.winpdfeditor.com/down/winpdfeditor.exe',
      install: 'install_inno_type'
    },
    'Zilla PDF Creator': {
      commercial: 3,
      url: 'https://www.pdfzilla.com/zilla_pdf_creator.html',
      version: '#colOne',
      download: 'https://www.pdfzilla.com/down/zilla_pdf_creator.exe',
      install: 'install_inno_cli'
    },
    'Zilla TXT To PDF Converter': {
      url: 'https://www.pdfzilla.com/zilla_txt_to_pdf_converter.html',
      version: '#colOne',
      download: 'https://www.pdfzilla.com/down/txt2pdf.exe',
      install: 'install_inno'
    },
    'Zilla Word To Text Converter': {
      url: 'https://www.pdfzilla.com/zilla_word_to_text_converter.html',
      version: '#colOne',
      download: 'https://www.pdfzilla.com/down/word2txt.exe',
      install: 'install_single'
    }
  }
};
