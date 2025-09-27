import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  
 reviews = [
    {
      image: 's1.webp',
      title: 'CRACKED MICROSOFT & AMAZON',
      name: 'Dhanaraj Bhaskar',
      text: 'I trusted AITAcademy & enrolled in AIT... It gave me a good path for placement preparation. It gave me a good path to follow along with a streamlined syllabus. The batch supported me a lot. '
    },
    {
      image: 's2.webp',
      title: 'CRACKED GOOGLE',
      name: 'Ankush Patil',
      text: 'The best thing about AIT was solving lots of questions while saving time. In fact 2 of the Qs asked to me in Google interview were directly from AIT. I am very grateful to AITAcademy for everything.'
    },
    {
      image: 's3.webp',
      title: 'CRACKED JP MORGAN',
      name: 'Mrunal Kale',
      text: 'I followed AITAcademy for everything & watched almost all the videos.With their batch I could study consistently, the alternate day schedule kept me extra motivated to complete all topics. It is a dream come true.'
    },
    {
      image: 's4.webp',
      title: 'CRACKED PAYPAL',
      name: 'Nisha Kumari',
      text: 'I am from Electrical branch & initially coding with college was tough for me. I wasnot able to build momentum with youtube either. But with the batch I started coding & practicing questions daily. In my interview I got the exact question we solved in class & I was so happy. '
    },
    {
      image: 's5.webp',
      title: 'CRACKED JP MORGAN',
      name: 'apoorva kumar',
      text: 'AITAcademy helped me cracked JP Morgan internship &  get a PPO for job. The batch gave me a structured path to follow. Everything from lecture & assignments to mentorship session helped me a lot during my interviews.'
    },
    {
      image: 's66.webp',
      title: 'CRACKED CISCO',
      name: 'Aakash Kangule',
      text: 'Because of Covid a lot of my college time got wasted. Before I enrolled in Alpha I had already watched AITAvademy lectures on Youtube. With AIT I felt a sense of commitment that helped me study consistently. It gave me a lot of of confidence boost for placements.'
    },
    {
      image: 's7.jpg',
      title: 'CRACKED HCL',
      name: 'VINAY D',
      text: 'Because of  AITAcademy I got 1st day 1st offer in placement season. The batch gave me a great flow & consistency. With ease I was able to complete all my lectures & questions.'

    },
    {
      image: 's8.webp',
      title: 'CRACKED Quest Global',
      name: 'Pritam Bhaskar',
      text: 'I am a student of Tier3 college & initially faced a lot of issues in coding. But after studying from AITAcademy, I believe any student who consistently studies from them can crack a good placement like me.'
    }
  ];

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  scrollTo(index: number) {
    const cardWidth = this.slider.nativeElement.offsetWidth;
    this.slider.nativeElement.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  }
}
