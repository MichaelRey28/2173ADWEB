import { Component } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html',
  styleUrl: './our-partner.component.css'
})
export  class OurPartnerComponent {
  partner =[ {company: 'Microsoft', trademark: "https://merivis.org/wp-content/uploads/2018/02/microsoft-logo-300x300.jpg", sponsorship: 'Platinum', website:"https://www.microsoft.com/en-ph/"},
  
  {company: 'Apple, Inc.', trademark: "https://elfabricantedenubes.com/wp-content/uploads/Apple-Logo-300x300.png", sponsorship: 'Gold', website:"https://www.apple.com/"},
   
  {company: 'Amazon', trademark: "https://logodix.com/logo/1034032.jpg", sponsorship: 'Silver', website:"amazon.com"}, 
  
  {company: 'Google', trademark: "https://pngimg.com/d/google_PNG19632.png", sponsorship: 'Bronze', website:"google.com"} ]

}
