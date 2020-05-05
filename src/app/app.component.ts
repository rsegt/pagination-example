import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the bar',
      url:
        'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Read',
      url:
        'https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the bar',
      url:
        'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Read',
      url:
        'https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the bar',
      url:
        'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Read',
      url:
        'https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the bar',
      url:
        'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Read',
      url:
        'https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Weekend ride',
      url:
        'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ];

  isCurrentPage(index: number, currentPage: number) {
    let activeClass = '';
    if (index === currentPage) {
      activeClass = 'is-current';
    }
    return activeClass;
  }

  isDisabled(currentPage: number, button: string) {
    switch (button) {
      case 'next':
        if (currentPage === this.images.length - 1) {
          return true;
        }
        break;
      case 'previous':
        if (currentPage === 0) {
          return true;
        }
        break;
    }
  }

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  pageDown() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
    }
  }

  pageUp() {
    if (this.currentPage < this.images.length - 1) {
      this.currentPage = this.currentPage + 1;
    }
  }
}
