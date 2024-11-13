import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ThemeUtilService } from '../theme.util.service';

export const themeResolver: ResolveFn<any | null> = (): void => {
  inject(ThemeUtilService).initializeTheme();
};
