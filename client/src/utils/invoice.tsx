import { useEffect } from "react";
import { pdf, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import type { Row, LabInfo } from "../dataContext/types";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffffff'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    table: {
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCol: {
        width: "25%", // adjust according to your needs
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        padding: 5,
    },
    tableCell: {
        fontSize: 12,
    },
});

export function PDFDocument({ rows, lab }: { rows: Row[]; lab: LabInfo }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>{lab.name}</Text>
                    <Text>{lab.address}</Text>
                    <Text>{lab.fromDate}</Text>
                    <Text>{lab.toDate}</Text>
                </View>

                {/* Table Header */}
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>SL NO</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Patient Name</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Age</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Sex</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Referred By</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Test</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Amount</Text>
                    </View>
                </View>

                {/* Table Rows */}
                {rows.map((r, index) => (
                    <View style={styles.tableRow} key={index}>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>{index + 1}</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>{r.name}</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>{r.age}</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>{r.sex}</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>{r.referred}</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>{r.test}</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>{r.amount}</Text></View>
                    </View>
                ))}
            </Page>
        </Document>
    )
}

export default function PDFGenerator({
    rows,
    lab,
}: {
    rows: Row[];
    lab: LabInfo;
}) {
    useEffect(() => {
        const generateAndDownloadPDF = async () => {
            const blob = await pdf(<PDFDocument rows={rows} lab={lab} />).toBlob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `${lab.name || "report"}.pdf`;
            link.click();

            URL.revokeObjectURL(url);
        };

        generateAndDownloadPDF();
    }, [rows, lab]);

return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h3>Generating PDF...</h3>
        <p>Your download should start automatically.</p>
    </div>
);
}