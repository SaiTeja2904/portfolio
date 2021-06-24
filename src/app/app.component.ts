import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'portfolio';
  education = {
    title: 'Education',
    items : [
      {time: '2014 - 2018', title: 'Bachelor of Technology', subtitle: 'VNR Vignana Jyothi Institute of Technology'},
      {time: '2012 - 2014', title: 'Board of Intermediate Education', subtitle: 'Sri Gayatri Jr. College'},
    ]
  };

  experience = {
    title: 'Experience',
    items : [
      {time: 'July 2018 - Present', title: 'Epam Systems', subtitle: 'Software Engineer'},
      {time: 'September 2017 - June 2018', title: 'Opentext Technologies Pvt. Ltd.', subtitle: 'Engineering Intern'},

    ]
  };

  card = this.education;
  experienceClicked(): void {
    this.card = this.experience;
  }
  educationClicked(): void {
    this.card = this.education;
  }
}
