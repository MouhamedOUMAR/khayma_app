import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Region {
  name: string;
  description: string;
  mainImage: string;
  galleryImages: string[];
}

@Component({
  selector: 'app-regions',
  imports: [CommonModule],
  templateUrl: './regions.html',
  styleUrl: './regions.scss',
})
export class Regions {
  showGallery = false;
  currentGalleryImages: string[] = [];
  currentImageIndex = 0;
  currentRegionName = '';

  regions: Region[] = [
    {
      name: 'Adrar',
      description: 'Découvrez les dunes de sable doré, les villes historiques de Chinguetti et Ouadane, et les oasis verdoyantes de la région d\'Adrar.',
      mainImage: 'images/regions/adrar-chinguetti.jpg',
      galleryImages: [
        'images/regions/adrar-chinguetti.jpg',
        'images/regions/adrar-1.jpg',
        'images/regions/adrar-2.jpg'
      ]
    },
    {
      name: 'Tagant',
      description: 'Plateaux rocheux, oasis luxuriantes et vallées verdoyantes caractérisent cette région au patrimoine culturel riche.',
      mainImage: 'images/regions/tagant-oasis.jpg',
      galleryImages: [
        'images/regions/tagant-oasis.jpg',
        'images/regions/tagant-1.jpg'
      ]
    },
    {
      name: 'Trarza',
      description: 'Entre fleuve Sénégal et océan Atlantique, Trarza offre des paysages variés, des plages et une biodiversité unique.',
      mainImage: 'images/regions/trarza-ville.jpg',
      galleryImages: [
        'images/regions/trarza-ville.jpg',
        'images/regions/trarza-1.jpg'
      ]
    },
    {
      name: 'Inchiri',
      description: 'Région minière par excellence avec des paysages désertiques spectaculaires et des formations rocheuses uniques.',
      mainImage: 'images/regions/tagant-1.jpg',
      galleryImages: [
        'images/regions/tagant-1.jpg'
      ]
    },
    {
      name: 'Gorgol',
      description: 'Agriculture florissante, traditions ancestrales et vie rurale authentique dans la vallée du fleuve Sénégal.',
      mainImage: 'images/regions/gorgol-agriculture.jpg',
      galleryImages: [
        'images/regions/gorgol-agriculture.jpg',
        'images/regions/gorgol-1.jpg'
      ]
    },
    {
      name: 'Hodh Echargui & Hodh Gharbi',
      description: 'Vastes étendues sahariennes, villages traditionnels et sites archéologiques fascinants dans l\'est mauritanien.',
      mainImage: 'images/regions/hodh-village.jpg',
      galleryImages: [
        'images/regions/hodh-village.jpg',
        'images/regions/hodh-1.jpg'
      ]
    }
  ];

  openGallery(region: Region) {
    this.currentRegionName = region.name;
    this.currentGalleryImages = region.galleryImages;
    this.currentImageIndex = 0;
    this.showGallery = true;
    document.body.style.overflow = 'hidden';
  }

  closeGallery() {
    this.showGallery = false;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    if (this.currentImageIndex < this.currentGalleryImages.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.currentGalleryImages.length - 1;
    }
  }

  get currentImage(): string {
    return this.currentGalleryImages[this.currentImageIndex];
  }
}
