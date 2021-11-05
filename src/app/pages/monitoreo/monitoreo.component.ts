import { Component, Injectable, OnInit } from '@angular/core';
import { SocketProviderConnect } from '../../services/web-socket.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.css']
})
export class MonitoreoComponent implements OnInit {
  title: string = 'Monitoreo'
  user: any;
  user_id: any;
  msg: any;
  input_message: any;
  show_message: any;
  messages: any = [];

  constructor(protected socketService: SocketProviderConnect,

    private cookieService: CookieService) {
    socketService.outEven.subscribe(res => {
      this.messages.push(res.msg)
    })

  }

  ngOnInit() {
    try {
      this.show_message = JSON.parse(this.cookieService.get('user'));
    } catch (e) {
      this.show_message = null
    }

  }

  mockedUser = () => {
    this.cookieService.set('user', JSON.stringify({
      user: this.user,
      id: this.user_id
    }))

    window.location.reload();
  }

  sendData = (event : any) => {
    this.socketService.emitEvent(event,
      {
        message: this.input_message
      })
    this.input_message = null;
  }

}
