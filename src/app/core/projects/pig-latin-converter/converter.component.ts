import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor() {
    this.initConverterForm();
  }

  converterForm: FormGroup;

  ngOnInit(): void {
  }

  private initConverterForm() {
    let plainText = '';
    let encodedText = '';

    this.converterForm = new FormGroup({
        'plainText': new FormControl(plainText, Validators.required),
        'encodedText': new FormControl(encodedText),
    });
  }

  onSubmit() {
    console.log(this.converterForm);

    let textToConvert = this.converterForm.get('plainText').value.toLowerCase();

    this.converterForm.patchValue({
      plainText: textToConvert,
      encodedText: this.convertToPigLatin(textToConvert)
    });
  }

  onClear() {
    this.converterForm.patchValue({ plainText: '', encodedText: ''});
  }

  private convertToPigLatin(plainText: string) {

    // First split into an array of words

    // Then for each word, convert to pig latin
    
    /* Logic
    If word starts with a vowel, then we just add 'yay' to the end of the word.
      All => Allyay
      Anything => Anythingyay
    If word starts with a consonant, then letters up to the first vowel are moved to the end in order, and then 'ay' is added to the end
      Toby => obyTay
      Sophie => ophieSay
      Then => enThay
    */

    const words = plainText.split(" ")
    const translated: string[] = []

    words.forEach(word => {
      const parts = word.match(/^([^aeiou]?qu|[^aeiou]*)(.+)/)
      const beginning = parts![1]
      const ending = parts![2]

      if (beginning.length === 0) {
        translated.push(`${word}ay`)
      } else {
        translated.push(`${ending}${beginning}ay`)
      }
    })

    return translated.join(" ")
  }

}
