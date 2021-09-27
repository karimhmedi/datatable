
import './styles/app.scss';
import 'datatables.net';
import 'datatables.net-bs5';

var dataSet = [
    ["1", "2", "BEN AYED Ons", "71 600 965", "71 600 965", "3 rue de l'Argentine Mannouba", ""],
    ["3", "1", "Saidi Med Lotfi", "", "71 269 358", "102 , belvedere 10114c  mouruge ben arous", "saidi@pharm.tn"],
    ["4", "2", "Mohsen Ghorbel", "71 287 090", "71 840 021", "Place Pasteur 1001 belvedere Tunis", "LabGhor@yahoo.Fr"],
    ["9", "2", "Kamoun Ben Meskina Atf", "71 842 714", "53 842 714", "31, avenue Alain Savary, Le Belvedère 1002 Tunis", "savarycenterlab@gmail.com"],
    ["10", "2", "Bouslama Adel", "71 584 164", "71 584 164", "Bardo Center, Bloc 5, App 9, 2000 Le Bardo", "bouslamalabo@topnet.tn"],
    ["12", "2", "Ounaies Najla", "71 221 450", "71 221 450", "Bardo Centre, Bloc 4, 3ème étage, n° 16", "najlaounaies@doctor.com"],
    ["13", "2", "BEN AYED Ons", "71 600 965", "71 600 965", "3 rue de l'Argentine Mannouba", ""],
    ["14", "2", "BEN AYED Ons", "71 600 965", "71 600 965", "3 rue de l'Argentine Mannouba", ""],
    ["15", "2", "BEN AYED Ons", "71 600 965", "71 600 965", "3 rue de l'Argentine Mannouba", ""],
    ["16", "2", "BEN AYED Ons", "71 600 965", "71 600 965", "3 rue de l'Argentine Mannouba", ""],
    ["17", "2", "BEN AYED Ons", "71 600 965", "71 600 965", "3 rue de l'Argentine Mannouba", ""],
    ["18", "2", "BEN AYED Ons", "71 600 965", "71 600 965", "3 rue de l'Argentine Mannouba", ""],
    ["19", "2", "BEN AYED Ons", "71 600 965", "71 600 965", "3 rue de l'Argentine Mannouba", ""],
]
$('#convention').DataTable(
    {
        data: dataSet,
        columns: [
            { title: "Code" },
            { title: "Type" },
            { title: "Libilé" },
            { title: "Tel 1" },
            { title: "Tel 2" },
            { title: "Adresse" },
            { title: "Email" }
        ],
        customize: function (doc) {
            doc.content[1].table.widths =
                Array(doc.content[1].table.body[0].length + 1).join('*').split('');

            doc.content[1].table.body[0].forEach(function (h) {
                h.fillColor = 'green';
                alignment: 'center'
            });

            doc.styles.title = {
                color: '#2D1D10',
                fontSize: '16',
                alignment: 'center'
            }
        }
    }
);
