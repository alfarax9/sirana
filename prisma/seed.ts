import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Mulai seeding database...');

  // Seed RegulationDoc
  const regulations = [
    {
      title: 'UU No. 24 Tahun 2007 tentang Penanggulangan Bencana',
      category: 'Undang-Undang',
      excerpt: 'Undang-undang yang mengatur tentang penyelenggaraan penanggulangan bencana yang bertujuan untuk memberikan perlindungan kepada masyarakat dari ancaman bencana.',
      url: 'https://jdih.setkab.go.id/PUUdoc/7308/UU0242007.htm',
      content: 'UU ini mengatur penyelenggaraan penanggulangan bencana dalam berbagai situasi, termasuk pencegahan, mitigasi, kesiapsiagaan, tanggap darurat, dan pemulihan.',
    },
    {
      title: 'SOP Evakuasi Tsunami Pantai Selatan Jawa',
      category: 'SOP',
      excerpt: 'Prosedur standar evakuasi masyarakat pesisir pantai selatan Jawa saat peringatan tsunami dikeluarkan oleh BMKG.',
      url: 'https://bnpb.go.id/sop/tsunami-jawa-selatan',
      content: 'SOP ini mencakup tahap persiapan, tahap peringatan, dan tahap evakuasi dengan detail jalur evakuasi dan titik kumpul yang aman.',
    },
    {
      title: 'Prosedur Pelaporan Bencana Via Digital',
      category: 'Prosedur Laporan',
      excerpt: 'Panduan lengkap pelaporan kejadian bencana melalui platform digital dan media sosial resmi.',
      url: 'https://bnpb.go.id/prosedur/pelaporan-digital',
      content: 'Prosedur ini mengatur format, channel, dan informasi wajib yang harus disertakan dalam setiap laporan bencana melalui platform digital.',
    },
    {
      title: 'SOP Tanggap Darurat Gempa Bumi',
      category: 'SOP',
      excerpt: 'Prosedur standar operasional untuk respons cepat saat terjadi gempa bumi dengan magnitude di atas 5.0 SR.',
      url: 'https://bnpb.go.id/sop/gempa-bumi',
      content: 'SOP ini mencakup fase immediate response, short term response, dan long term recovery untuk penanganan gempa bumi.',
    },
    {
      title: 'Peraturan BPBD No. 15/2023 Mitigasi Banjir',
      category: 'Undang-Undang',
      excerpt: 'Peraturan daerah tentang mitigasi struktural dan non-struktural untuk pengurangan risiko bencana banjir.',
      url: 'https://bpbd.go.id/peraturan/mitigasi-banjir-2023',
      content: 'Peraturan ini mengatur mitigasi struktural dan non-struktural, serta peran masyarakat dalam pengurangan risiko banjir.',
    },
  ];

  for (const regulation of regulations) {
    await prisma.regulationDoc.upsert({
      where: { id: regulation.title }, // Use title as unique identifier for upsert
      update: {},
      create: {
        title: regulation.title,
        category: regulation.category,
        excerpt: regulation.excerpt,
        url: regulation.url,
        content: regulation.content,
      },
    });
  }

  // Seed Sample Reports
  const reports = [
    {
      lokasi: 'Jakarta Pusat, DKI Jakarta',
      jenisBencana: 'Banjir',
      deskripsi: 'Banjir setinggi 1 meter di kawasan Jalan Sudirman akibat hujan deras. Beberapa ruas jalan tidak dapat dilalui kendaraan.',
      fotoUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      sumber: 'webform',
      lat: -6.2088,
      lng: 106.8456,
      reporters: 3,
    },
    {
      lokasi: 'Bandung Selatan, Jawa Barat',
      jenisBencana: 'Longsor',
      deskripsi: 'Tanah longsor menutup akses jalan di daerah Dago. Tidak ada korban jiwa, namun 2 rumah rusak.',
      fotoUrl: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg',
      sumber: 'webform',
      lat: -6.9175,
      lng: 107.6191,
      reporters: 1,
    },
    {
      lokasi: 'Surabaya Timur, Jawa Timur',
      jenisBencana: 'Angin Puting Beliung',
      deskripsi: 'Angin kencang merobohkan pohon dan merusak atap beberapa rumah. Tim BPBD sudah tiba di lokasi.',
      fotoUrl: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg',
      sumber: 'chat',
      lat: -7.2575,
      lng: 112.7521,
      reporters: 2,
    },
    {
      lokasi: 'Garut, Jawa Barat',
      jenisBencana: 'Gempa Bumi',
      deskripsi: 'Gempa magnitude 4.2 SR terasa selama 15 detik. Tidak ada kerusakan signifikan dilaporkan.',
      sumber: 'webform',
      lat: -7.2104,
      lng: 107.8994,
      reporters: 5,
    },
    {
      lokasi: 'Pandeglang, Banten',
      jenisBencana: 'Tsunami',
      deskripsi: 'Peringatan tsunami dikeluarkan setelah gempa 6.1 SR. Masyarakat pesisir telah dievakuasi ke tempat tinggi.',
      sumber: 'webform',
      lat: -6.3086,
      lng: 106.1061,
      reporters: 12,
    },
  ];

  for (const report of reports) {
    await prisma.report.create({
      data: report,
    });
  }

  console.log('✅ Seeding selesai!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });