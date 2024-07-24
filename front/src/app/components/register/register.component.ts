import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}

  name = '';
  email = '';
  password = '';
  phone = '';

  async registrar() {
    console.log(this.name, this.email, this.password, this.phone);
    try {
      const response = await firstValueFrom(
        this.http.post('http://localhost:3000/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
        })
      );
      console.log('Success:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}