import dayjs from 'dayjs';
import {MockServerData} from '../../types/index.js';
import {OfferGenerator} from './offer-generator.interface.js';
import {generateRandomValue, getRandomItem, getRandomItems} from '../../helpers/index.js';

const PredefinedValues = {
  BEDROOM: {
    MIN: 1,
    MAX: 8,
  },
  MAX_ADULT: {
    MIN: 1,
    MAX: 10,
  },
  PRICE: {
    MIN: 100,
    MAX: 100000,
  },
  RATE: {
    MIN: 1,
    MAX: 5,
  },
};

const WeekDay = {FIRST: 1, LAST: 7};

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
    const rating = generateRandomValue(PredefinedValues.RATE.MIN, PredefinedValues.RATE.MAX).toString();
    const type = getRandomItem<string>(this.mockData.types);
    const bedrooms = generateRandomValue(PredefinedValues.BEDROOM.MIN, PredefinedValues.BEDROOM.MAX).toString();
    const maxAdults = generateRandomValue(PredefinedValues.MAX_ADULT.MIN, PredefinedValues.MAX_ADULT.MAX).toString();
    const price = generateRandomValue(PredefinedValues.PRICE.MIN, PredefinedValues.PRICE.MAX).toString();
    const goods = getRandomItems<string>(this.mockData.goods).join(';');
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomItem<string>(this.mockData.passwords);
    const userType = getRandomItem<string>(this.mockData.userTypes);
    const location = getRandomItem<string>(this.mockData.locations);

    const date = dayjs()
      .subtract(generateRandomValue(WeekDay.FIRST, WeekDay.LAST), 'day')
      .toISOString();

    const [latitude, longitude] = location.split(' ');

    return [
      title, description, date, city, previewImage, images, isPremium, isFavorite, rating, type, bedrooms, maxAdults, price, goods, name, email, avatar, password, userType, latitude, longitude
    ].join('\t');
  }
}
