
import { car } from '../oefening';

describe('009-methods', () => {
  it('should have typed car correctly', () => {
    const logs: string[] = [];
    jest.spyOn(console, 'log').mockImplementation((message: string) => {
      logs.push(message);
    });

    const drive: () => string = car.drive;
    const brake: () => void = car.brake;
    const gas: (speed: number) => string = car.gas;
    const doors: (open: boolean) => string = car.doors;


    expect(drive()).toBe('vroom vroom');

    brake();
    expect(logs).toEqual(['stop']);

    expect(gas(100)).toBe("I'm going 100 miles an hour");
    expect(doors(true)).toBe('The doors are opening');
    expect(doors(false)).toBe('The doors are closing');
  });
});
