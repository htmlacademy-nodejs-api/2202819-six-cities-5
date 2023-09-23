import {readFileSync} from 'node:fs';
import {FileReader} from './file-reader.interface.js';
import {Offer, CityName, HouseType, Goods, UserType} from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, date, city, previewImage, images, isPremium, isFavorite, rating, type, bedrooms, maxAdults, price, goods, name, email, avatarPath, password, userType, latitude, longitude]) => ({
        title,
        description,
        date: new Date(date),
        city: city as CityName,
        previewImage,
        images: images.split(';')
          .map((image) => image),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: Number.parseFloat(rating),
        type: type as HouseType,
        bedrooms: Number.parseInt(bedrooms, 10),
        maxAdults: Number.parseInt(maxAdults, 10),
        price: Number.parseInt(price, 10),
        goods: goods.split(';')
          .map((good) => good) as Goods[],
        user: {name, email, avatarPath, password, userType: userType as UserType},
        location: {latitude: Number.parseFloat(latitude), longitude: Number.parseFloat(longitude)},
      }));
  }
}
