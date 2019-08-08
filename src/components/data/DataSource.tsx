import SidebarMenuItem from "../types/SidebarMenuItem";
import MailType from "../types/MailType";
import {Routes} from "../App";

class DataSource {

    static mailList: MailType[] = [];

    static getSidebarMenuItems(): SidebarMenuItem[] {

        return [
            {
                id: 1,
                title: "Inbox",
                group: "Main",
                route: Routes.inbox,
                icon: "fas fa-inbox"
            },
            // {
            //     id: 2,
            //     title: "Calendar",
            //     group: "Main",
            //     route: "/calendar",
            //     icon: "far fa-calendar-alt"
            // },
            {
                id: 3,
                title: "Sent",
                group: "Folder",
                route: Routes.sent,
                icon: "fab fa-telegram-plane"
            },
            {
                id: 4,
                title: "Archive",
                group: "Folder",
                route: Routes.archive,
                icon: "fas fa-archive"
            }
        ];
    }

    static getMail(): MailType[] {

        if(this.mailList.length){
            return this.mailList;
        }

        return [
            {
                id: "1",
                date: "2019-08-04 13:44",
                from: "Alexandr Derevianko",
                subject: "mail#1",
                content_review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                is_read: false,
                is_deleted: false,
            },
            {
                id: "2",
                date: "2019-08-05 23:45",
                from: "Alexandr Derevianko",
                subject: "mail#2",
                content_review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                is_read: false,
                is_deleted: false,
            },
            {
                id: "3",
                date: "2019-08-06 09:46",
                from: "Alexandr Derevianko",
                subject: "mail#3",
                content_review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                is_read: false,
                is_deleted: false,
            },
            {
                id: "4",
                date: "2019-07-04 13:44",
                from: "Alexandr Derevianko",
                subject: "mail#4",
                content_review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                is_read: false,
                is_deleted: false,
            },
            {
                id: "5",
                date: "2019-06-05 11:45",
                from: "Alexandr Derevianko",
                subject: "mail#5",
                content_review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                is_read: false,
                is_deleted: false,
            },
            {
                id: "6",
                date: "2019-05-06 18:46",
                from: "Alexandr Derevianko",
                subject: "mail#6",
                content_review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                is_read: false,
                is_deleted: false,
            },
            {
                id: "7",
                date: "2019-08-04 13:44",
                from: "Alexandr Derevianko",
                subject: "mail#7",
                content_review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                is_read: true,
                is_deleted: true,
            },
            {
                id: "8",
                date: "2019-08-05 23:45",
                from: "Alexandr Derevianko",
                subject: "mail#8",
                content_review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                is_read: true,
                is_deleted: true,
            },
            {
                id: "9",
                date: "2019-08-06 09:46",
                from: "Alexandr Derevianko",
                subject: "mail#9",
                content_review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                is_read: true,
                is_deleted: true,
            },
        ];

    }

    static getInbox(): MailType[] {
        return this.getMail().filter((mail) => {
            return !mail.is_deleted;
        });
    }

    static getSentMail(): MailType[] {
        return [];
    }

    static getArchiveMail(): MailType[] {
      return this.getMail().filter((mail) => {
            return mail.is_deleted;
        });
    }

    static updateMailData(mail: MailType): void {
        DataSource.mailList = this.getMail().map((_mail) => {
            if(_mail.id === mail.id){
                return mail;
            }
            return _mail;
        });
    }

    static getMailById(id: string): MailType {
        return this.getMail().find((mail) => mail.id === id) as MailType;
    }
}

export default DataSource;