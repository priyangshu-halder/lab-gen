import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { pdf, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import type { Row, LabInfo } from "../dataContext/types";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffffff',
        padding: 20,
        fontSize: 10,
    },
    header: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingBottom: 10,
    },
    labName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    labAddress: {
        fontSize: 9,
        marginBottom: 3,
    },
    dateRange: {
        fontSize: 8,
        marginTop: 4,
        color: '#444444',
    },
    tableContainer: {
        marginVertical: 10,
        marginBottom: 15,
    },
    table: {
        width: "100%",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: '#000000',
    },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: '#cccccc',
    },
    tableCol: {
        flex: 1,
        borderRightWidth: 0.5,
        borderRightColor: '#cccccc',
        padding: 4,
        justifyContent: 'center',
    },
    tableColLast: {
        flex: 1,
        padding: 4,
        justifyContent: 'center',
    },
    tableCell: {
        fontSize: 9,
    },
    tableCellHeader: {
        fontSize: 9,
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 15,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    totalLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        marginRight: 30,
    },
    totalAmount: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export function PDFDocument({ rows, lab }: { rows: Row[]; lab: LabInfo }) {
    const totalAmount = rows.reduce((sum, r) => sum + (parseFloat(r.amount) || 0), 0);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={styles.labName}>{lab.name || 'Laboratory Name'}</Text>
                    <Text style={styles.labAddress}>{lab.address || 'Address'}</Text>
                    <Text style={styles.dateRange}>
                        {lab.fromDate && lab.toDate
                            ? `From: ${lab.fromDate} To: ${lab.toDate}`
                            : 'Date Range'}
                    </Text>
                </View>

                {/* Table Section */}
                <View style={styles.tableContainer}>
                    <View style={styles.table}>
                        {/* Table Header */}
                        <View style={styles.tableHeader}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCellHeader}>SL.NO</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCellHeader}>Patient Name</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCellHeader}>Age</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCellHeader}>Sex</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCellHeader}>Referred By</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCellHeader}>Test</Text>
                            </View>
                            <View style={styles.tableColLast}>
                                <Text style={styles.tableCellHeader}>Amount</Text>
                            </View>
                        </View>

                        {/* Table Rows */}
                        {rows.map((r, index) => (
                            <View style={styles.tableRow} key={index}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{index + 1}</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{r.name}</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{r.age}</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{r.sex}</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{r.referred}</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{r.test}</Text>
                                </View>
                                <View style={styles.tableColLast}>
                                    <Text style={styles.tableCell}>₹{parseFloat(r.amount || '0').toFixed(2)}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Footer Section - Total Amount */}
                <View style={styles.footer}>
                    <Text style={styles.totalLabel}>Total Amount:</Text>
                    <Text style={styles.totalAmount}>₹{totalAmount.toFixed(2)}</Text>
                </View>
            </Page>
        </Document>
    );
}

export default function PDFGenerator({
    rows,
    lab,
}: {
    rows: Row[];
    lab: LabInfo;
}) {
    const navigate = useNavigate();
    const hasDownloaded = useRef(false);

    useEffect(() => {
        // Prevent duplicate downloads
        if (hasDownloaded.current) return;
        hasDownloaded.current = true;

        const generateAndDownloadPDF = async () => {
            const blob = await pdf(<PDFDocument rows={rows} lab={lab} />).toBlob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `${lab.name || "report"}.pdf`;
            link.click();

            URL.revokeObjectURL(url);

            setTimeout(() => {
                navigate("/");
            }, 500);
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
