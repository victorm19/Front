import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsertarPersona } from 'src/app/entities/insertarPersona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  form: FormGroup;
  submited: boolean;
  insertData: InsertarPersona = new InsertarPersona();
  tiposIndentificacion: any[];

  constructor(private readonly formBuilder: FormBuilder,
              private readonly personaService: PersonaService) { 
    this.submited = false;
    this.tiposIndentificacion = [
      {nombre: 'Cedula de ciudadania'},
      {nombre: 'Cedula de extranjeria'},
      {nombre: 'Pasaporte'},
      {nombre: 'NIT'}
    ]
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      email: ['', Validators.required],
      tipoIdentificacion: ['', Validators.required],
      usuario: ['', Validators.required],
      pass: ['', Validators.required],
      fechaCreacion: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  guardar() {
    if(this.form.invalid) {
      this.submited = true;
      return;
    }

    this.fillModel();
    this.insertarPersona();
    this.submited = false;
  }

  insertarPersona() {
    this.personaService.insertarPersona(this.insertData).subscribe(
      () => {
        this.form.reset();
        Swal.fire(
          'Guardado',
          'Persona fue guardada de manera exitosa',
          'success'
        )
      }
    )
  }

  fillModel() {
    const form = this.form.controls;
    this.insertData.persona.Nombres = form.nombre.value;
    this.insertData.persona.Apellidos = form.apellidos.value;
    this.insertData.persona.NumeroIdentificación = form.numeroIdentificacion.value;
    this.insertData.persona.Email = form.email.value;
    this.insertData.persona.TipoIdentificación = form.tipoIdentificacion.value;
    this.insertData.usuario.Usuario = form.usuario.value;
    this.insertData.usuario.Pass = form.pass.value;
    this.insertData.persona.FechaCreación = form.fechaCreacion.value;
    this.insertData.usuario.FechaCreación = form.fechaCreacion.value;
  }

}
