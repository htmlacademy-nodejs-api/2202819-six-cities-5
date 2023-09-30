import dayjs from 'dayjs';
import {MockServerData} from '../../types/index.js';
import {OfferGenerator} from './offer-generator.interface.js';
import {generateRandomValue, getRandomItem, getRandomItems} from '../../helpers/index.js';

const PredefinedValues = {
  Rate: {Min: 1, Max: 5},
  Bedroom: {Min: 1, Max: 8},
  MaxAdult: {Min: 1, Max: 10},
  Price: {Min: 100, Max: 100000},
} as const;

const WeekDay = {First: 1, Last: 7} as const;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.images).join(';');
    const isPremium = Boolean(Math.random() < 0.5);
    const isFavorite = Boolean(Math.random() < 0.5);
    const rating = generateRandomValue(PredefinedValues.Rate.Min, PredefinedValues.Rate.Max).toString();
    const type = getRandomItem<string>(this.mockData.types);
    const bedrooms = generateRandomValue(PredefinedValues.Bedroom.Min, PredefinedValues.Bedroom.Max).toString();
    const maxAdults = generateRandomValue(PredefinedValues.MaxAdult.Min, PredefinedValues.MaxAdult.Max).toString();
    const price = generateRandomValue(PredefinedValues.Price.Min, PredefinedValues.Price.Max).toString();
    const goods = getRandomItems<string>(this.mockData.goods).join(';');
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomItem<string>(this.mockData.passwords);
    const userType = getRandomItem<string>(this.mockData.userTypes);
    const location = getRandomItem<string>(this.mockData.locations);

    const date = dayjs()
      .subtract(generateRandomValue(WeekDay.First, WeekDay.Last), 'day')
      .toISOString();

    const [latitude, longitude] = location.split(' ');

    return [
      title, description, date, city, previewImage, images, isPremium, isFavorite, rating, type, bedrooms, maxAdults, price, goods, name, email, avatar, password, userType, latitude, longitude
    ].join('\t');
  }
}
