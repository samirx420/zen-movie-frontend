import { AuthService } from "./auth.service";
import { MovieService } from "./movie.service";

export const services: any[]=[
    AuthService,
    MovieService
];

export * from './auth.service';
export * from './movie.service';