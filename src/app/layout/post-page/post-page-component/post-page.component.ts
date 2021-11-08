import { Component, OnInit } from '@angular/core';
import moment from 'moment';
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  constructor() { }
  postVar = {
    commentsArr: [
      { img: 'assets/images/user-image.png', name: 'User 1', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 2', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 3', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 4', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 5', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 6', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 7', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 8', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 9', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 10', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 11', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' },
      { img: 'assets/images/user-image.png', name: 'User 12', rating: '4', commentDate: new Date(Date.now() - 12096e5), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' }
    ],
    pagedItems: [{ img: 'assets/images/user-image.png', name: 'User 1', rating: '4', commentDate: new Date(), comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", duration: '' }],
    postRating: 3,
    loadMore: 1
  }
  ngOnInit(): void {
    this.postVar.pagedItems = [];
    this.pageChanged();
  }
  addComment() {

  }
  showMoreComment() {
    this.postVar.loadMore++;
    this.pageChanged();
  }
  pageChanged() {
    const startItem = (this.postVar.loadMore - 1) * 5;
    const endItem = this.postVar.loadMore * 5;
    var arr = this.postVar.commentsArr.slice(startItem, endItem);
    if (this.postVar.pagedItems.length <= this.postVar.commentsArr.length) {
      this.postVar.pagedItems = [...this.postVar.pagedItems, ...arr];
      this.postVar.pagedItems.map(it => {
        it.commentDate = this.randomDate(it.commentDate, new Date());
      })
      this.postVar.pagedItems.map(it => {
        it.duration = this.secondsToDHMS(it.commentDate.getSeconds());
      })
      this.sortByDueDate(this.postVar.pagedItems);
      console.log(this.postVar.pagedItems);
    }
  }
  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  secondsToDHMS(seconds: any) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }
  iffYMDHMS(date1, date2) {
    let years = date1.diff(date2, 'year');
    date2.add(years, 'years');
    let months = date1.diff(date2, 'months');
    date2.add(months, 'months');
    let days = date1.diff(date2, 'days');
    date2.add(days, 'days');
    let hours = date1.diff(date2, 'hours');
    date2.add(hours, 'hours');
    let minutes = date1.diff(date2, 'minutes');
    date2.add(minutes, 'minutes');
    let seconds = date1.diff(date2, 'seconds');
    console.log(years + ' y ' + months + ' m ' + days + ' d ' + hours + 'h ' + minutes + ' m ' + seconds + ' s');
    return (years !== 0 ? years + 'y ' : '') + (months !== 0 ? months + 'm ' : '') + (days !== 0 ? days + 'd ' : '') + (hours !== 0 ? hours + 'h ' : '') + (minutes !== 0 ? minutes + 'm ' : '') + (seconds !== 0 ? seconds + 's ' : '');
  }
  sortByDueDate(myArray) {
    myArray.sort((a, b) => {
      return a.commentDate.getTime() - b.commentDate.getTime();
    });
  }
}
