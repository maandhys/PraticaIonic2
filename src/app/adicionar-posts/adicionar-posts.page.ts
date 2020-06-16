import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-posts',
  templateUrl: './adicionar-posts.page.html',
  styleUrls: ['./adicionar-posts.page.scss'],
})
export class AdicionarPostsPage implements OnInit {

  formulario = {
    userId: '',
    id: '',
    title: '',
    body: ''
  }
  constructor() { }

  ngOnInit() {
  }

  adicionarPost(form) {
    alert("Post adicionado com sucesso!")
  }
}
